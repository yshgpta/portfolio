from django.urls import path
from my_career import views

urlpatterns = [
    path('',views.index),
]
