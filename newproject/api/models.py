from django.db import models

class Contacto(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    correo = models.EmailField()
    celular = models.CharField(max_length=15)
    mensaje = models.TextField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

