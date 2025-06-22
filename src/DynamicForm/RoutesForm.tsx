import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { App } from '../App'
import { FormGenerator } from './FormGenerator'
import { AnswerForm } from './AnswerForm'

export const RoutesForm = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/FormGenerator" element={<FormGenerator />} />
      <Route path="/AnswerForm" element={<AnswerForm />} />
    </>
  )
);