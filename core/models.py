from django.db import models
from django.contrib.auth.models import User as DjangoUser

class Usuario(models.Model):
    user = models.OneToOneField(DjangoUser,null=True, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.user.username

class Amostra(models.Model):
    concentracao = models.FloatField(default=0)
    temperatura = models.FloatField(default=0)

    def __str__(self) -> str:
        return f'Concentração: {self.concentracao} Temperatura: {self.temperatura}'

class Experimento(models.Model):
    responsavel = models.ForeignKey(DjangoUser, on_delete= models.CASCADE, null=True)
    nome = models.TextField(default='Sem nome')
    amostras = models.ManyToManyField(Amostra)

    def __str__(self):
        return self.nome 