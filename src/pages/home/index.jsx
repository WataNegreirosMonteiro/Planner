import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import { Plus } from 'phosphor-react'
import "./style.css"
import Task from "../../components/Task";

export default function Home(){
  return(
    <>
        <Navbar
            icon="0"
            title="Identificação"
            description="Identifique-se para acessar informações pessoais"
            route="/inicio"
        />

        <div className="add-task-container">

            <input className="add-task-input" type="text" placeholder="Adicionar..." />

            < Plus className="add-task-icon" weight="bold" color="#0284C7"/>
        </div>

        <div className="tasks-container">
            <div className="tasks">
                <Task text="Atividade de matemática" />
                <Task text="Atividade de matemática" />
                <Task text="Atividade de matemática" />
            </div>

        </div>


    </>
  )
}