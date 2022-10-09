import React from "react";
import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";

const ThemeSelector = () => {
	const themeColors = ["red", "green", "yellow", "blue"];
	const { changeColor } = useTheme();
	return (
		<div className="theme-selector">
			<div className="theme-buttons">
				{themeColors.map((color) => {
					return (
						<div
							key={color}
							onClick={() => changeColor(color, "green")}
							style={{ backgroundColor: color }}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ThemeSelector;
