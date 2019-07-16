const validation = (props) => {
    const length = props.length

    if (length <= 5) {
        return "Text too short!!"
    }

    return "Text is the right length"
}

export default validation