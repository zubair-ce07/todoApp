import React, { useState } from "react";
import styled from "styled-components";
import { addTodo, editTodo, deleteTodo, doneTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Item = styled.li`
  width: 100%;
  margin: 4px 0;
  display: flex;
  flex-direction: row;
`;

const ItemInput = styled.input`
  width: 100%;
`;

const ItemCheckbox = styled.input.attrs({
	type: "checkbox",
})``;


const ItemList: React.FC = () => {
	const items = useAppSelector((s) => s.todos.items);
	const dispatch = useAppDispatch();

	return (
		<List>
			{items.map((item) => (
				<Item key={item.id}>
					<Checkbox name={item.id} checked={item.done}
						onClick={(e: any) => dispatch(doneTodo(item.id, !item.done))} />
					<TextField
						className={`list-group-item ${item.done && 'crossed-line'}`}
						variant="standard"
						type="text"
						label="Add notes"
						value={item.text}
						fullWidth
						onChange={(e: any) => dispatch(editTodo(item.id, e.target.value))}
					/>
					<IconButton onClick={(e: any) => dispatch(addTodo())} color="primary" aria-label="Add notes" disabled={item.text == ''}>
						<AddCircleOutlineIcon />
					</IconButton>
					<IconButton onClick={(e) => dispatch(deleteTodo(item.id))} color="primary" aria-label="delete" disabled={items.length == 1}>
						<DeleteIcon />
					</IconButton>
				</Item>
			))}

		</List>
	);
};

export default ItemList;
