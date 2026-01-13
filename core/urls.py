from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # ← изменили main на home
    path('news/', views.news_list, name='news'),
    path('news/<int:pk>/', views.news_detail, name='news_detail'),
    path('team/', views.team_list, name='team'),
    path('history/', views.history_list, name='history'),
    path('history/<int:pk>/', views.history_detail, name='history_detail'),
    path('partners/', views.partner_list, name='partners'),
    path('contacts/', views.contacts, name='contacts'),
    path('logout/', views.logout_view, name='logout'),
]