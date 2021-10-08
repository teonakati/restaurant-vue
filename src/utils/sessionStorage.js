export default {
    get(key) {
        let item = sessionStorage.getItem(key)
        item = JSON.parse(item)

        if (item)
            return item

        return null
    },

    set(key, value) {
        if (value == null) return

        let newValue = JSON.stringify(value)
        sessionStorage.setItem(key, newValue)

    }
}