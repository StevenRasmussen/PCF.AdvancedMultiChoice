import * as React from "react";

export interface IAdvancedMultiSelectProps {
    values: [];
}

export class AdvancedMultiSelectControl extends React.Component<IAdvancedMultiSelectProps>{

    public clearOptions() {
        alert("Clear options");
    }

    public getOptions() {
        alert("Get options called");
    }

    public removeOption(option: number) {
        alert("Remove option");
    }


    render = (): React.ReactNode => {
        return <div>AdvancedMultiSelectControl</div>
    }
}

//export const AdvancedMultiSelectControl = React.memo<IAdvancedMultiSelectProps>((props) => {
//    return (
//        <div>
//        </div>
//    );
//});

export default AdvancedMultiSelectControl;