import { Checkbox } from "@fluentui/react";
import * as React from "react";

export interface ICheckboxProps {
	label: string,
	disabled?: boolean,
	onChange: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) => void;
}

export const CheckboxControl = React.memo<ICheckboxProps>((props) => {

	function clearOptions() {
		alert("Clear options");
	}

	function getOptions() {
		alert("Get options called");
	}

	function removeOption(option: number) {
		alert("Remove option");
	}

	function addOption(option: number) {
		alert("Remove option");
		//if (this._optionSetMetadata.Options.map(x => x.Value).indexOf(option) < 0) {
		//	console.error(`There is no choice with the value '${option}' available for the '${this._optionSetMetadata.DisplayName}' choices set.`)
		//	return;
		//}
	}


	return (
		<Checkbox label={props.label} onChange={props.onChange} disabled={props.disabled ?? false}>
		</Checkbox>
	);
});

export default CheckboxControl;