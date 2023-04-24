const req = require("request-promise")

 const _required = (variable) => {
    if (variable === "" || variable === undefined) {
        throw ("Param cant be blank");
    }
}


const clean = (data) => {
    let regex = /(<([^>]+)>)/ig;
    data = data.replace(/(<br?\s?\/>)/ig, ' \n');
    return data.replace(regex, '');
};

const format_graphql = `query SearchQuery($query: String!, $first: Int!, $after: ID) {\n	questionSearch(query: $query, first: $first, after: $after) {\n	edges {\n	  node {\ncontent\n		attachments{\nurl\n}\n		answers {\n			nodes {\ncontent\n				attachments{\nurl\n}\n}\n}\n}\n}\n}\n}\n`;

const Brainly = async (query, count = 10) => {
	// check value is null or not
	_required(count);
	_required(query);

	let service = {
		uri: 'https://brainly.co.id/graphql/id',
		json: true,
                strictSSL: false,
		headers: {
			'host': 'brainly.co.id',
			"content-type": "application/json; charset=utf-8",
			"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
		},
		body: {
			"operationName": "SearchQuery",
			"variables": {
				"query": query,
				"after": null,
				"first": count
			},
			"query": format_graphql
		}
	};

	return await req.post(service).then(response => {
		let question_list = response.data.questionSearch.edges;

		if (question_list.length) {
			let final_data = [];
			question_list.forEach(question => {
				let jawaban = [];
				let answers = question.node.answers.nodes;

				if (answers.length) {
					// dump answers
					answers.forEach(answer => {

						jawaban.push({
							"text": clean(answer.content),
							"media": (answer.attachments.length) ? answer.attachments.map(file => file.url) : []
						});
					});
				}

				final_data.push({
					"pertanyaan": clean(question.node.content),
					"jawaban": jawaban,
					"questionMedia": (question.node.attachments.length) ? question.node.attachments.map(file => file.url) : [],
				});
			});

			return {
				'success': true,
				'length': final_data.length,
				'message': 'Request Success',
				'data': final_data
			};
		} else {
			return {
				'success': true,
				'length': 0,
				'message': 'Data not found',
				'data': []
			};
		}
	});
};

module.exports = Brainly