from api.llm_client import LLMClient
from config import OPENAI_API_KEY, OPENAI_MODEL
from openai import OpenAI
import json



class OpenAIClient(LLMClient):

    def __init__(self):
        self.model = OPENAI_MODEL
        self.language = None
        self.level = None
        self.topic = None
        self.client = None
        self.create_client() # runs as soon as obejct is created


    def create_client(self):
        client = OpenAI(api_key=OPENAI_API_KEY)
        self.client = client
        return client 

    # ADDITIONAL OPTIONS
    # Questions must be in English but answers in {self.language}.
    # Topics include {self.topic}
    # Do NOT prefix options with A.) or 1.) or A) or 1).
 
    def create_prompt(self):
        prompt = f"""
            You are a quiz generator for a language learning app.

            The user is learning {self.language} at a {self.level} level.
            Quiz topics should cover grammar and {", ".join(self.topic)}
            Generate a quiz in JSON format only. 
            Do not include explanations or extra text.

            Do not wrap the JSON in triple backticks or any other formatting.
            The answer MUST match exactly one of the options.
            
            Return EXACTLY in this JSON format:

            {{
            "questions": [
                {{
                "question": "string",
                "options": [],
                "answer": "string"
                }}
            ]
            }}
        """
        return prompt


    def get_response(self, learning_options):
        self.language = learning_options["language"]
        self.level = learning_options["level"]
        self.topic = learning_options["topic"]
        prompt = self.create_prompt()
        response = self.client.responses.create(
            model=self.model,
            input=prompt,
        )
        res = response.output_text
        return json.loads(res)

