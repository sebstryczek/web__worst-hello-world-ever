import datetime
from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase
from api.models import Entity, User
from api.serializers import EntitySerializer

client = APIClient()
test_user_data = {'email': 'test@user.com', 'password': '123456'}


class GetAllEntitiesTest(TestCase):
    """ Test module for GET all puppies API """

    def setUp(self):
        User.objects.create_user(test_user_data['email'], test_user_data['password'])
        Entity.objects.create(field_date=datetime.date(2018, 4, 10), field_text='text 1')
        Entity.objects.create(field_date=datetime.date(2018, 4, 9), field_text='text 2')

    def test_get_all_puppies(self):
        resp = client.post("/api/auth/", data=test_user_data, follow=True)
        token = resp.data["token"]

        client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        response = client.get("/api/entities/")

        entities = Entity.objects.all()
        serializer = EntitySerializer(entities, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
