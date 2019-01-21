import datetime
from django.test import TestCase
from api.models import Entity


class EntityTest(TestCase):
    """ Test module for Entity model """

    def setUp(self):
        Entity.objects.create(field_date=datetime.date(2018, 4, 10), field_text='text 1')
        Entity.objects.create(field_date=datetime.date(2018, 4, 9), field_text='text 2')

    def test_entity_attributes(self):
        entity1 = Entity.objects.all()[0]
        entity2 = Entity.objects.all()[1]
        self.assertEqual(entity1.field_date, datetime.date(2018, 4, 10))
        self.assertEqual(entity1.field_text, 'text 1')
        self.assertEqual(entity2.field_date, datetime.date(2018, 4, 9))
        self.assertEqual(entity2.field_text, 'text 2')
