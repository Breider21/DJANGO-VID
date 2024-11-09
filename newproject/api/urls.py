from django.urls import path
from .views import get_user, create_user, user_detail, register

urlpatterns = [
    path('users/', get_user, name='get_user'), # Users endpoint
    path('users/create/', create_user, name='create_user'), # Create user endpoint
    path('users/<int:pk>/', user_detail, name='user_detail'), # User detail endpoint
    path('register/', register, name='register') # Register endpoint
]