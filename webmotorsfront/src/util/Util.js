// export const handleChange = (el, _regexValidate, objectName, component) => {
//     let inputName = el.target.name;
//     let inputValue = el.target.value;
//     let entitiesCopy = Object.assign({}, component.state[objectName]);

//     if (_regexValidate === null || ValidRegex(inputValue, _regexValidate)) {
//         Object.defineProperty(entitiesCopy, inputName, { value: inputValue, writable: true, enumerable: true, configurable: true });

//         component.setState({ [objectName]: entitiesCopy });
//     }
//     else {
//         inputValue = "";
//     }
// }   

export const handleChangeByValue = (value, nameElement) => {
    let entitiesCopy = Object.assign({}, this.state.Entities);
    Object.defineProperty(entitiesCopy, nameElement, { value: value, writable: true, enumerable: true, configurable: true });

    this.setState({ Entidade: entitiesCopy });
}