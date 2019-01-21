from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from api.models import Entity
from api.serializers import EntitySerializer


class EntityViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer
