from rest_framework.serializers import ModelSerializer
from api.models import Entity


class EntitySerializer(ModelSerializer):
    class Meta:
        model = Entity
        fields = ('id', 'field_text', 'field_date')
