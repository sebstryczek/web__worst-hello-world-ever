from django.db import models


class Entity(models.Model):
    field_date = models.DateField()
    field_text = models.CharField(max_length=100)

    def __str__(self):
        return self.field_text
