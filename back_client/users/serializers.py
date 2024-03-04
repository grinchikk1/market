from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['username', 'email']

class UserRegistrationSerializer(serializers.ModelSerializer):

	tokens = serializers.SerializerMethodField()
	password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
	confirm_password = serializers.CharField(write_only=True, required=True)

	class Meta:
		model = User
		fields = ['username', 'email', 'tokens', 'password', 'confirm_password']

	def validate(self, attrs):
		if attrs['password'] != attrs['confirm_password']:
			raise serializers.ValidationError({"password": "Password fields didn't match."})
		return attrs

	def get_tokens(self, user):
		tokens = RefreshToken.for_user(user)

		return {'refresh': str(tokens), 'access': str(tokens.access_token)}

	def create(self, validated_data):
		user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'], password=validated_data['password'])
		return user