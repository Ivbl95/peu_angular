export const python: string = `
<article>
<div>Int, Float</div>
<pre>
# int
x = 100  # 100
x = 1_000_000  # 1000000, _ как разделитель
int(1.7)  # 1, отбрасывает остаток у float

# float
x = 1.5  # 1.5
x = 1e3  # 1000.0
float(1)  # 1.0

# number operations
10%3  # 1, остаток от деления
2**3  # 8, степень
5//2  # 2, деление с отбросом остатка
</pre>
<div>Class</div>
<pre>
class FirstClass:  # Каждое слово в имени класса с большой буквы
    pass  # Заполняет пустоту чтобы не было ошибки

first_instance = FirstClass()  # Создать экземпляр класса

class SecondClass:
    def __init__(self, arg1, arg2):  # Конструктор класса принимает в себя новосозданный экземпляр (self) и два аргумента
        self.arg1 = arg1
        self.arg2 = arg2  # Присвоение данных в новосозданный экземпляр из аргументов, переданных при создании экземпляра

second_instance = SecondClass('data_for_arg1', 'data_for_arg2')  # Создать экземпляр класса и передать данные в конструктор

class ThirdClass:
    def __init__(self, arg1=15):  # 15 - значение по умолчанию
        self.arg1 = arg1

third_instance = ThirdClass()  # Можно не передавать значение, если есть значение по умолчанию, иначе ошибка
</pre>
<div>Атрибуты и методы</div>
<pre>
class Cat:
    voice = 'meow'  # Статический атрибут

    def __init__(self, name):
        self.name = name  # Атрибут уровня экземпляра

    def run(self):  # Метод класса
        return 'тыгыдык'
</pre>
<div>Constant, Private, Protected, @Property</div>
<pre>
class Cat:
    VOICE = 'meow'  # Статический атрибут константа. Ее можно поменять (но не надо)

    def __init__(self, name, age):
        self.__name = name  # Private атрибут, доступ только из своего класса
        self._age = age  # Protected атрибут, доступ из своего класса и наследников

    @property  # Свойство по сути геттер для приватного или защищенного атрибута
    def name(self):
        return self.__name

    @name.setter  # Сеттер для приватного или защищенного атрибута
    def name(self, value):
        self.__name = value

    @name.deleter  # Делетер для приватного или защищенного атрибута
    def name(self):
        del self.__name  # После удаления, обращение к нему вызовет ошибку



myafa = Cat('Myafa', 3)
print(myafa._Cat__name)  # Так можно получить доступ к Private (но не надо)
print(myafa._age)  # Так можно получить доступ к Protected (но не надо)

print(myafa.name)  # Get value
myafa.name = 'myafka'  # Set value
del myafa.name  # Delete attribute
</pre>
<div>@staticmethod, @classmethod</div>
<pre>
class Shake:
    def __init__(self, ingredients):
        self.ingredients = ingredients

    @classmethod  # Имеет доступ к конструктору, статическим атрибутам и методам
    def bananaMilkShake(cls):  # cls - это ссылка на класс, откуда вызывается метод (может быть дочерний или текущий)
        return cls(['milk', 'banana'])  # Вызов конструктора Shake

    @staticmethod  # Не имеет прямого доступа к классу
    def strawberryMilkShake():
        return Shake(['milk', 'strawberries'])  # Вызов конструктора Shake


lemonIceShake = Shake(['lemon', 'ice', 'soda'])
bananaMilkShake = Shake.bananaMilkShake()
strawberryMilkShake = Shake.strawberryMilkShake()
print(lemonIceShake.ingredients)
print(bananaMilkShake.ingredients)
print(strawberryMilkShake.ingredients)
</pre>
<div>Mixins</div>
<pre>
class Animal:  # Базовый класс
    pass

class RunMixin:  # Миксин может подмешиваться в классы для расширения списка доступных атрибутов и методов
    def run(self):
        print('I run')

class Human(Animal, RunMixin):  # Дочерний класс от Animal с миксином RunMixin
    pass

class Cat(Animal, RunMixin):  # Дочерний класс от Animal с миксином RunMixin
    pass

class Elefant(Animal):  # Дочерний класс от Animal без миксина RunMixin
    pass

ivan = Human()
barsik = Cat()
tosha = Elefant()

ivan.run()
barsik.run()
# Экземпляр tosha не имеет доступа к методу run, так как миксин не подмешан в его класс
# tosha.run()
</pre>
<div>Abstract base class</div>
<pre>
from abc import ABC  # Импорт базового класса ABC для использования абстрактного класса
from abc import abstractmethod  # Импорт декоратора @abstractmethod

class ElectronicDevice(ABC):  # Наследование от ABC создает ограничение для создания экземпляра класса ElectronicDevice
    def __init__(self):
        super().__init__()  # Вызов конструктора ABC

    @abstractmethod  # Декоратор обязывает переопределять метод в наследниках
    def orientation(self):
        return ['portrait', 'landscape']

    def count_of_core(self):  # Метод без декоратора переопределять не обязательно, но можно
        return 1

class Mobile(ElectronicDevice):  # Дочерний класс от ElectronicDevice
    def orientation(self):
        return super().orientation()  # Можно брать значения из абстрактного класса, главное переопределен

class Computer(ElectronicDevice):  # Дочерний класс от ElectronicDevice
    def orientation(self):
        return ['portrait']

    def count_of_core(self):
        return 8

iphone = Mobile()
acer = Computer()
# Нельзя создать экземпляр абстрактного класса
# device = ElectronicDevice()
</pre>
</article>
`;
