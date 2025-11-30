import os
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

# Mock context
context = """Step 4: Setting up the Hydroponic System
With the nutrient solution prepared, it's time to set up the hydroponic system. Place the holder tray over the bucket containing the nutrient solution. This tray serves as the platform for your hydroponic setup. Now, position the Mother Cup, which houses the germinated sapling, on the tray. This setup allows the plant to absorb the nutrient-rich water, kick starting its growth in the hydroponic system.The hydroponic system represents a sophisticated yet user-friendly approach to cultivation. It eliminates the need for soil, allowing plants to thrive directly in the nutrient-rich water. The setup is designed for efficiency and simplicity, catering to both novice and experienced gardeners.
Step 3: Prepare Nutrient Solution
The heart of hydroponic gardening lies in providing plants with the essential nutrients they need for robust growth. Smart Gardeners simplifies this process by providing customized nutrient packets. To prepare the nutrient solution, take a bucket and fill it with 5 liters of water. Open the first nutrient packet labeled "Step 1" and carefully mix its contents into the water. Ensure thorough mixing to create a well-balanced nutrient solution.This nutrient solution serves as the lifeblood for your plants, supplying them with precisely what they need for healthy development. The tailored nutrient packets eliminate the guesswork, providing a foolproof method for delivering the right nutrients to your growing garden.
Step 1: Prepare Coco Coir in the Mother Cup
The first crucial step in the hydroponic journey is preparing the growing medium. In your kit, you'll find Coco Coir, a natural and sustainable substrate derived from coconut husks. Take the provided Mother Cup and place the Coco Coir within it. To initiate the expansion process, give the Coco Coir a small amount of water. This sets the foundation for a nutrient-rich environment that will foster optimal plant growth.
Step 6: Monitor Plant Growth
Hydroponic gardening is a dynamic process, and monitoring plant growth is a key element of ensuring success. Utilize the provided web portal and real-time monitoring device to keep a close eye on the health and progress of your plants. The web portal offers a wealth of information, from step-by-step tutorials to troubleshooting guides, providing a comprehensive resource for both beginners and seasoned gardeners.As your plants flourish in the hydroponic system, take advantage of the real-time data provided by the monitoring device. This device, placed within the water reservoir, offers insights into crucial factors such as nutrient levels, ensuring that you can make informed decisions to optimize the growing conditions. Monitoring plant growth becomes not just a task but a journey of discovery and connection with the vibrant life unfolding in your hydroponic garden.
Step 7: Harvesting Healthy Plants"""

question = "what are the steps to use the produt ? Give me more details"

# New Prompt Template (as in main.py)
prompt_template_with_history = """
You are **The Gardener**, a fast and highly accurate assistant for Smart Gardeners.

Your rules:
1. Use the information found in the provided *Context* section to answer the question.
2. If the answer is not found in the context, reply:
   "Sorry but I do not have any information regarding this topic. Kindly get in touch with the team."
3. Keep answers concise but informative.
4. Ignore irrelevant parts of the conversation history unless directly useful for answering.

Context:
{context}

Conversation History:
{history}

User Question:
{question}

Final Answer:
"""

llm = ChatOpenAI(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
)

print("\n--- Testing New Prompt ---")
prompt = prompt_template_with_history.format(context=context, question=question, history="")
response = llm.invoke(prompt)
print(response.content)
