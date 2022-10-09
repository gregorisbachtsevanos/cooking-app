import React from "react";
import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";

const ThemeSelector = () => {
	const themeColors = ["#BF2C2C", "#FF2300", "#770D57"];
	const { changeColor, changeMode, mode } = useTheme();

	return (
		<div className="theme-selector">
			<div className="mode-toggle">
				<button
					onClick={() =>
						changeMode(mode === "#EAEAEA" ? "#131214" : "#EAEAEA")
					}
				>
					Theme
				</button>
			</div>
			<div className="theme-buttons">
				{themeColors.map((color) => {
					return (
						<div
							key={color}
							onClick={() => changeColor(color)}
							style={{ backgroundColor: color }}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ThemeSelector;
