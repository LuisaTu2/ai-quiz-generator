from flask import Flask, request
from api.openai_client import OpenAIClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = OpenAIClient()


@app.route('/learn-api/', methods=['GET'])
def get_quiz():
    learning_requirements = {
        "language": request.args.get('language'),
        "level": request.args.get('level'),
        "topic": request.args.get('topic')
    }
    # print("new request: ", learning_requirements)
    response = client.get_response(learning_options=learning_requirements)
    # print("response from openai: \n", response)
    return response


if __name__ == '__main__':
    app.run(debug=True)
