from django.shortcuts import render
from .serializers import UserSerializer, UserRegistrationSerializer
from rest_framework import generics, permissions
from .models import User
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class UserViewSet(generics.GenericAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request, *args, **kwargs):
		users = self.get_queryset()
		serializer = self.get_serializer(users, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

class UserRegisterView(generics.CreateAPIView):
	serializer_class = UserRegistrationSerializer
	permission_classes = [permissions.AllowAny]

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data = request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return Response(serializer.data)