import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import { App } from "./App";

it("should calculate the weight price manually", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const priceInput = screen.getByLabelText("Precio:");
  const calculateButton = screen.getByText("Calcular");
  userEvent.type(weightInput, "2");
  userEvent.type(priceInput, "5");
  userEvent.click(calculateButton);

  const totalInput = screen.getByLabelText("Total:");
  expect(weightInput).toHaveValue(2);
  expect(priceInput).toHaveValue(5);
  expect(totalInput).toHaveValue(10);
});

it.skip("should clear the input values", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const priceInput = screen.getByLabelText("Precio:");
  const calculateButton = screen.getByText("Calcular");
  const clearButton = screen.getByText("Limpiar");
  userEvent.type(weightInput, "2");
  userEvent.type(priceInput, "5");
  userEvent.click(calculateButton);
  userEvent.click(clearButton);

  const totalInput = screen.getByLabelText("Total:");
  expect(weightInput).toHaveValue(0);
  expect(priceInput).toHaveValue(0);
  expect(totalInput).toHaveValue(0);
});

it.skip("should calculate the weight price with the product button", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const bananaButton = screen.getByLabelText("Plátano");
  const calculateButton = screen.getByText("Calcular");
  userEvent.type(weightInput, "2");
  userEvent.click(bananaButton);
  userEvent.click(calculateButton);

  const totalInput = screen.getByLabelText("Total:");
  expect(totalInput).toHaveValue(3.38);
});

it.skip("should add the product weight to the list", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const bananaButton = screen.getByLabelText("Plátano");
  const addToListButton = screen.getByText("Añadir");
  userEvent.type(weightInput, "2");
  userEvent.click(bananaButton);
  userEvent.click(addToListButton);

  const item = screen.getByRole("listitem");
  expect(item).toHaveTextContent("Plátano - 3.380 €");
});

it.skip("should display the total price of the purchase", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const bananaButton = screen.getByLabelText("Plátano");
  const watermelonButton = screen.getByLabelText("Sandía");
  const addToListButton = screen.getByText("Añadir");
  userEvent.type(weightInput, "2");
  userEvent.click(bananaButton);
  userEvent.click(addToListButton);
  userEvent.type(weightInput, "4");
  userEvent.click(watermelonButton);
  userEvent.click(addToListButton);

  const [firstItem, secondItem] = screen.getAllByRole("listitem");
  expect(firstItem).toHaveTextContent("Plátano - 3.380€");
  expect(secondItem).toHaveTextContent("Sandía - 3.160€");
  expect(screen.getByText("Total - 6.540€")).toBeInTheDocument();
});

it.skip("should be able to clean the purchase", async () => {
  render(<App />);

  const weightInput = screen.getByLabelText("Peso:");
  const bananaButton = screen.getByLabelText("Plátano");
  const addToListButton = screen.getByText("Añadir");
  const resetButton = screen.getByText("Borrar");
  userEvent.type(weightInput, "2");
  userEvent.click(bananaButton);
  userEvent.click(addToListButton);
  const item = screen.getByRole("listitem");
  userEvent.click(resetButton);

  const priceInput = screen.getByLabelText("Precio:");
  const totalInput = screen.getByLabelText("Total:");
  expect(item).not.toBeInTheDocument();
  expect(weightInput).toHaveValue(0);
  expect(priceInput).toHaveValue(0);
  expect(totalInput).toHaveValue(0);
  expect(screen.getByText("Total - 0.000€")).toBeInTheDocument();
});
