from dotenv import load_dotenv
import os
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Initialize the chat model
model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

def get_gemini_response(prompt, max_tokens=50):
    response = chat.send_message(prompt, stream=True)
    response_text = ""

    for chunk in response:
        response_text += chunk.text
        if len(response_text.split()) >= max_tokens:
            break

    return response_text

print("Gemini LLM Application")

chat_history = []

while True:
    user_input = input("Input: ")

    if not user_input:
        break

    response = get_gemini_response(user_input, max_tokens=50)

    print("The Response is:")
    print(response)
    chat_history.append(("Bot", response))

    print("\nChat History:")
    for role, text in chat_history:
        print(f"{role}: {text}")
