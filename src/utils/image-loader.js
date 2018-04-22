function importAll(r) {
    return r.keys().map(r)
}
          
export default importAll(require.context('../img/', false, /\.(png|jpe?g|svg)$/))
