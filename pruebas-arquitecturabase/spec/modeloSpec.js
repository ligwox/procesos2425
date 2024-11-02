describe("El sistema", function () {
  let sistema;
  beforeEach(function () {
    sistema = new Sistema();
  });

  it("inicialmente no hay usuarios", function () {
    expect(sistema.numeroUsuarios()).toEqual(0);
  });
  it("debería agregar un usuario correctamente", function () {
    sistema.agregarUsuario("Pepe");
    expect(sistema.usuarios["Pepe"]).toBeDefined();
    expect(sistema.usuarios["Pepe"].nick).toEqual("Pepe");
  });
  it("debería devolver todos los usuarios", function () {
    sistema.agregarUsuario("Pepe");
    sistema.agregarUsuario("Luis");
    const usuarios = sistema.obtenerUsuarios();
    expect(Object.keys(usuarios).length).toEqual(2);
    expect(usuarios["Pepe"].nick).toEqual("Pepe");
    expect(usuarios["Luis"].nick).toEqual("Luis");
  });
  it("debería devolver true si el usuario está activo y false si no existe", function () {
    sistema.agregarUsuario("Pepe");
    expect(sistema.usuarioActivo("Pepe")).toBeTrue();
    expect(sistema.usuarioActivo("Luis")).toBeFalse();
  });
  it("debería eliminar un usuario correctamente", function () {
    sistema.agregarUsuario("Pepe");
    sistema.eliminarUsuario("Pepe");
    expect(sistema.usuarios["Pepe"]).toBeUndefined();
  });
});
