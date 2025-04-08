import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getNoteCount, getAllNotes } from "~/utils/notes.server";
import toast from "react-hot-toast";

export const loader: LoaderFunction = async () => {
  const count = getNoteCount();
  const notes = getAllNotes();
  return json({ count, notes });
};

export default function Stats() {
  const { count, notes } = useLoaderData<typeof loader>();


  
  return (
    <div>
   
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">📊 Stats</h1>
        <p className="mb-6 text-gray-700">Total notes written: <strong>{count}</strong></p>

        <div className="space-y-4">
          {notes.length === 0 ? (
            <p className="text-gray-500 italic">No notes yet...</p>
          ) : (
            notes.map((note:{title:string , body:string}, idx:number) => (
                <div
                key={idx}
                className="bg-yellow-50 border border-yellow-200 p-4 rounded-md shadow-sm"
              >
                <h2 className="text-lg font-semibold text-blue-700 mb-1">
                  {note.title}
                </h2>
                <p className="text-gray-800 whitespace-pre-line">
                  {note.body}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
