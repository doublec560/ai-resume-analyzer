import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from '../../constants';
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" }, // Titulo do projecto na tab
    { name: "description", content: "Analisador de Currículos" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

  <Navbar/>

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your Submissions and check AI-powered feedback.</h2>
      </div> 
   

     {/* Criar um array que lista os cvs analisados.*/}


     {resumes.length > 0 && (
      <div className="resumes-section">
         {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}/>
       ))}
      </div>
      
     )}

      </section>
    
      
    
    
  </main>;
}
