def compute_proportions(freqs_del, freqs_food, sentence):
  """
    assigns the distribution of topics given our current underdstanding of how frequent each word is in the given context
  """
  words = sentence.split(' ')
  
  # TODO probably only adjectives and nouns should count, use spacy tags.
  # this isnt'the right algorithm anyaws tho so screw it hahah

  freq_word_del = 0
  freq_word_food = 0
  freqs = {}
  for word in words:
    
    # TODO words and their frequencies shoud be saved per Token because otherwise pizza is not the same as pizzas!
    
    if not (word == ''):
      try:
        freq_word_del += freqs_del[word]
      except:
        freq_word_del += 0
        
      try:
        freq_word_food += freqs_food[word]
      except:
        freq_word_food += 0

  return freq_word_food, freq_word_del, 'food' if freq_word_food>freq_word_del else 'delivery'

def compute_frequences(string):
  """
    computes how frequent each word is in the given context
  """
  string = string.replace('\n', '') 
  array = string.split(' ')

  frequences = {}
  for unique_word in set(array):
    frequences[unique_word] = 0
    for word in array:
      if unique_word == word:
        frequences[word]+=1
        
  return frequences