export default {
    get(key) {
        let item = localStorage.getItem(key)
        item = JSON.parse(item)

        if (item)
            return item

        return null
    },

    update(key, value) {
        if (value == null) return

        let newValue = JSON.stringify(value)
        localStorage.setItem(key, newValue)

    }
}