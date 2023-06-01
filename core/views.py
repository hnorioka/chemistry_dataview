from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.utils import timezone
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from .models import DjangoUser, Usuario, Amostra, Experimento
# Create your views here.

def index(request):
    return render(request, 'core/index.html') 
    
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if not username or not password:
            return render(request, 'core/login.html',{
                'erro':'Há campos vázios'
            }) 
        
        user = authenticate(username=username, password = password)
        print(user)
        if user:
            django_login(request, user)
            return redirect('dashboard')
            #vai pra dashboard
        else:
            return render(request, 'core/login.html',{
                'erro':'Usuário ou senha incorreta!'
            }) 
        
    return render(request, 'core/login.html')

def logout(request):
    django_logout(request)
    return redirect('index')

def cadastro(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        confirmar_password = request.POST.get('confirmar_password')

        if not username or not password or not confirmar_password:
            return render(request, 'core/cadastro.html',{
                'erro':'Há campos vázios'
            }) 
        
        if password != confirmar_password: 
            return render(request, 'core/cadastro.html',{
                'erro':'As senhas são diferentes!'
            }) 
    

        if DjangoUser.objects.filter(username = username).first():
            return render(request, 'core/cadastro.html',{
            'erro':'O usuário já existe!'
        })
    
        django_user = DjangoUser.objects.create_user(first_name=username,username=username, password=password, date_joined= timezone.now())

        user = Usuario(user= django_user)

        user.save()

        django_user = authenticate(username = username, password = password)

        django_login(request, django_user)

        return  redirect('dashboard')
        
    else:
        return render(request, 'core/cadastro.html')

    
def dashboard(request):
    experimentos = Experimento.objects.all()
    return render(request, 'core/dashboard.html',{'experimentos':experimentos})

def cadastrar_experimento(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        user = request.user
        experimento = Experimento(nome=nome, responsavel= user)

        experimento.save()
    
        return redirect('dashboard')
    
    return HttpResponse('Método não permitido.')

def deletar_experimento(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        user = request.user
        experimento = Experimento.objects.filter(nome=nome)

        experimento.delete()
        
        return redirect()
    
def cadastrar_amostra(request):
    if request.method == 'POST':
        temperatura = float(request.POST.get('temperatura'))
        concentracao = float(request.POST.get('concentracao'))
        nome_experimento = request.POST.get('nome_experimento')

        experimento = Experimento.objects.get(nome=nome_experimento )
        amostra = Amostra(temperatura,temperatura=temperatura, concentracao=concentracao)
        amostra.save()
        experimento.amostras.add(amostra)
        experimento.save()

        return redirect('dashboard')


def deletar_amostra(request):
    if request.method == 'POST':
        id_amostra = int(request.POST.get('id'))

        amostra = Amostra.objects.get(id = id_amostra)

        amostra.delete()

        amostra.save()

        return redirect('dashboard')
