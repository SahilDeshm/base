import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { addNote } from "~/utils/notes.server";
import {jsonWithSuccess } from "remix-toast"
 
export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const note = formData.get("note");
    const title = formData.get("title");

    if (typeof note === "string" && note.trim() !== "" &&  typeof title === "string" &&
    title.trim() !== "") {
        addNote({title , body: note});
    }
    return jsonWithSuccess({success: true }, "✅ Note saved successfully!");
};  

export default function WriteNote() {
    const actionData = useActionData<typeof action>();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    📝 Write a Note
                </h1>
                <Form method="post" className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Note title"
                        className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <textarea
                        name="note"
                        rows={6}
                        placeholder="Write your note here..."
                        className="w-full p-4 rounded-md border border-gray-300 bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
                    >
                        Save Note
                    </button>
                </Form>


        </div>
    </div >
  );
}
