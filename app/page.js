import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
 
 // variables
  const isLoggedIn = true;
  const user = "Sreenath";

  //main app
  return (
    <main>
      <h1 className="title">Collect customer feedback to build better products</h1>
      <div className="title">Create a feedback board in minutes</div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={user} />
    </main>
  );
}
