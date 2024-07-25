import { supabase } from './../lib/supabaseClient';

async function Page(){
  let { data: notes  } = await supabase.from('notes').select('*');

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

export default Page;
