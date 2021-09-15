function key() {
  const password = '138010';
  const login = 'rodrigoxd';
  const uri = `mongodb+srv://${login}:${password}@cluster0.nvkja.mongodb.net/grades?retryWrites=true&w=majority`;
  return uri;
}

export default key();
