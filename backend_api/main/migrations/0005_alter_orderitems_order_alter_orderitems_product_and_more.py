# Generated by Django 5.1.6 on 2025-02-18 04:58

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_customer_order_orderitems'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitems',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='main.order'),
        ),
        migrations.AlterField(
            model_name='orderitems',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.product'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='category_products', to='main.productcategory'),
        ),
    ]
