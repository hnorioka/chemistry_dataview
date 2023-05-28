
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',  views.index, name='index'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('cadastrar-experimento/', views.cadastrar_experimento, name='cadastrar-experimento')
]
