from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# http request -> response
# called sometimes request handler
# or action

def helloWorld(request):
    x = 1
    y = 2
    return render(request, 'hello.html', {'name': 'Denis'})