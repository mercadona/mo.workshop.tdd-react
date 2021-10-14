import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import { App } from "./App";


it("debes ver la apicación de balanza", () => {
  render(<App />);

  const inputPeso = screen.getByLabelText("Peso:");
  const inputPrecio = screen.getByLabelText("Precio:");
  const inputTotal = screen.getByLabelText("Total:");
  const platano = screen.getByLabelText("Plátano");
  const naranja = screen.getByLabelText("Naranja");
  const uva = screen.getByLabelText("Uva");
  const sandia = screen.getByLabelText("Sandía");
  const melon = screen.getByLabelText("Melón");
  const kiwi = screen.getByLabelText("Kiwi");
  const breva = screen.getByLabelText("Breva");
  const aguacate = screen.getByLabelText("Aguacate");
  const mango = screen.getByLabelText("Mango");
  const botonCalcular = screen.getByText("Calcular");
  const error = screen.queryByText("Error");

  expect(inputPeso).toBeInTheDocument();
  expect(inputPrecio).toBeInTheDocument();
  expect(inputTotal).toBeInTheDocument();
  expect(platano).toBeInTheDocument();
  expect(naranja).toBeInTheDocument();
  expect(uva).toBeInTheDocument();
  expect(sandia).toBeInTheDocument();
  expect(melon).toBeInTheDocument();
  expect(kiwi).toBeInTheDocument();
  expect(breva).toBeInTheDocument();
  expect(aguacate).toBeInTheDocument();
  expect(mango).toBeInTheDocument();
  expect(botonCalcular).toBeInTheDocument();
  expect(error).not.toBeInTheDocument();
});

it.skip("debes poder introducir un pesaje", () => {
  render(<App />);

  // Pesar una fruta
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");

  expect(inputPeso).toHaveValue(2);
});

it.skip("deber poder seleccionar una fruta y ver su peso", () => {
  render(<App />);

  // Hacer click en el botón de la sandía
  const sandiaButton = screen.getByLabelText("Sandía");
  userEvent.click(sandiaButton);

  // Coger el precio del input
  const inputPrecio = screen.getByLabelText("Precio:");
  expect(inputPrecio).toHaveValue(0.93);
});

it.skip("debes poder calcular el total", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular el precio
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);

  // Coger el total del input
  const inputTotal = screen.getByLabelText("Total:");
  expect(inputTotal).toHaveValue(3.38);
});

it.skip("debes ver un error cuando calculas el total sin el precio", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón de calcular
  userEvent.click(screen.getByText("Calcular"));

  expect(screen.getByText("Error")).toBeInTheDocument();
});

it.skip("debes eliminar el error cuando seleccionas una fruta", () => {
  render(<App />);

  // Hacer click en el botón de calcular
  userEvent.click(screen.getByText("Calcular"));
  // Hacer click en el botón de la sandía
  userEvent.click(screen.getByLabelText("Sandía"));

  expect(screen.queryByText("Error")).not.toBeInTheDocument();
});

it.skip("deber ver un error si no hay peso", () => {
  render(<App />);

  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  userEvent.click(screen.getByText("Calcular"));

  expect(screen.getByText("Error")).toBeInTheDocument();
});

it.skip("debes poder borrar los inputs", () => {
  render(<App />);

  // Pesar el plátano
  const inputPesoField = screen.getByLabelText("Peso:");
  userEvent.type(inputPesoField, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);
  // Hacer click en el botón de limpiar
  const clearButton = screen.getByText("Limpiar");
  userEvent.click(clearButton);

  // Coger el peso del input
  const inputPeso = screen.getByLabelText("Peso:");
  expect(inputPeso).toHaveValue(0);
  // Coger el total del input
  const inputTotal = screen.getByLabelText("Total:");
  expect(inputTotal).toHaveValue(0);
  // Coger el precio del input
  const inputPrecio = screen.getByLabelText("Precio:");
  expect(inputPrecio).toHaveValue(0);
});

it.skip("debes poder añadir el último precio pesado al sidebar", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);

  // Coger el sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
});

it.skip("debes poder crear una lista de precio de los pesajes en el sidebar", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);
  // Pesar la sandía
  userEvent.clear(inputPeso);
  userEvent.type(inputPeso, "4");
  // Hacer click en el botón de la sandía
  const sandiaButton = screen.getByLabelText("Sandía");
  userEvent.click(sandiaButton);
  // Hacer click en el botón de calcular
  userEvent.click(botonCalcular);

  // Coger el sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
  expect(sidebar).toHaveTextContent("3.72 €");
});

it.skip("debes poder ver el precio total de todos los pesajes", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Clicks the platano button
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);
  // Pesar la sandía
  userEvent.clear(inputPeso);
  userEvent.type(inputPeso, "4");
  // Hacer click en el botón de la sandía
  const sandiaButton = screen.getByLabelText("Sandía");
  userEvent.click(sandiaButton);
  // Hacer click en el botón de calcular
  userEvent.click(botonCalcular);

  // Coger el sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("3.38 €");
  expect(sidebar).toHaveTextContent("3.72 €");
  expect(sidebar).toHaveTextContent("Total - 7.1 €");
});

it.skip("debes poder añadir el último producto pesado y el precio al sidebar", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);

  // Coger el sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("Plátano - 3.38 €");
});

it.skip("debes poder ver el nombre de producto por cada producto pesado en el sidebar", () => {
  render(<App />);

  // Pesar el plátano
  const inputPeso = screen.getByLabelText("Peso:");
  userEvent.type(inputPeso, "2");
  // Hacer click en el botón del plátano
  const platanoButton = screen.getByLabelText("Plátano");
  userEvent.click(platanoButton);
  // Hacer click en el botón de calcular
  const botonCalcular = screen.getByText("Calcular");
  userEvent.click(botonCalcular);
  // Pesar la sandía
  userEvent.clear(inputPeso);
  userEvent.type(inputPeso, "4");
  // Hacer click en el botón de la sandía
  const sandiaButton = screen.getByLabelText("Sandía");
  userEvent.click(sandiaButton);
  // Hacer click en el botón de calcular
  userEvent.click(botonCalcular);

  // Coger el sidebar
  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toHaveTextContent("Plátano - 3.38 €");
  expect(sidebar).toHaveTextContent("Sandía - 3.72 €");
});

it.skip("debes identificar el tipo de error", () => {});

it.skip("debes poder borrar la lista", () => {});

it.skip("debes poder borrar un elemento de la lista", () => {});

describe("Tests de regresión", () => {
  it.skip("no debe añadir un producto a la lista si hay un error", () => {});

  it.skip("debes ver los precios con un máximo de dos decimales", () => {});
});
