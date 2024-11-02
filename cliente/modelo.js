function Sistema() {
  this.usuarios = {};
  this.agregarUsuario = function (nick) {
    if (!this.usuarios[nick]) {
      this.usuarios[nick] = new Usuario(nick);
    }
  };
  this.eliminarUsuario = function (nick) {
    if (this.usuarios[nick]) {
      return delete this.usuarios[nick];
    } else return false;
  };
  this.obtenerUsuarios = function () {
    return this.usuarios;
  };
  this.usuarioActivo = function (nick) {
    return !!this.usuarios[nick];
  };
  this.numeroUsuarios = function () {
    return Object.keys(this.usuarios).length;
  };
}

function Usuario(nick) {
  this.nick = nick;
}
