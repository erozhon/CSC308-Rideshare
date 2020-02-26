def greet(name):
   if name is None:
      return "Hello, my friend."

   elif isinstance(name, list) == False:
      if name.isupper() == True and len(name) != 0:
         return "HELLO " + name + "!"
      elif len(name) != 0:
         return "Hello, " + name + "."

   else:
      capNames = []
      names = []
      quoteNames= []

      for n in name:
         if n.isupper() == True:
            capNames.append(n)
         else:
            if "," in n:
               if "\"" in n:
                  n = n.replace('"', '')
                  names.append(n)
               else:
                  namesSplit = n.split(', ')
                  for l in namesSplit:
                     names.append(l)
            else:
               names.append(n)
      str = "Hello"

      for n in names:
         if (names[-1] == n):
            if len(names) == 2:
               str = str + " and "
            else:
               str = str + ", and "
         else:
            str = str + ", "
         str = str + n
      str = str + "."
      if len(capNames) > 0:
         str = str + " AND HELLO "
         for n in capNames:
            str = str + n
         str = str + "!"
      return str
