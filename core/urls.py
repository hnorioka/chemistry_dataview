
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',  views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('cadastrar-experimento/', views.cadastrar_experimento, name='cadastrar-experimento'),
    path('deletar-experimento/', views.deletar_experimento, name='deletar-experimento'),
    path('cadastrar-amostra', views.cadastrar_amostra, name='cadastrar-amostra'),
    path('deletar-amostra/', views.deletar_amostra, name='deletar-amostra')
]
