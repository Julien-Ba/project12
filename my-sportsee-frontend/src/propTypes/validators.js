// Generic isRequired helper
function createIsRequired(validator) {
    return (props, propName, componentName) => {
        const value = props[propName];
        if (value === undefined || value === null) {
            return new Error(`${propName} in ${componentName} is required`);
        }
        return validator(props, propName, componentName);
    };
}

export function createCombinedValidator(validators) {
    function validator(props, propName, componentName) {
        for (const validate of validators) {
            const error = validate(props, propName, componentName);
            if (error) return error;
        }
    }

    validator.isRequired = createIsRequired(validator);
    return validator;
}

export function isInteger(props, propName, componentName) {
    const value = props[propName];
    if (value !== undefined && value !== null && !Number.isInteger(value)) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected integer.`);
    }
}
isInteger.isRequired = createIsRequired(isInteger);

export function isDateFormat(props, propName, componentName) {
    const value = props[propName];
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (value !== undefined && value !== null && !regex.test(value)) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expected date format YYYY-MM-DD.`);
    }
}
isDateFormat.isRequired = createIsRequired(isDateFormat);

export function createRangeValidator(min, max) {
    function validator(props, propName, componentName) {
        const value = props[propName];
        if (value !== undefined && value !== null && (value < min || value > max)) {
            return new Error(`${propName} in ${componentName} must be between ${min} and ${max}`);
        }
    }
    validator.isRequired = createIsRequired(validator);
    return validator;
}
