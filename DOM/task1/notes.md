# DOM Word Counter – Quick Revision Notes

## 1. Event Handling
- `input` event har key press, delete, paste par fire hota hai
- Har event par **complete current value** milti hai (old + new text)

## 2. Re-counting Concept (Important)
- Har event fire hone par logic **poori string par dubara chalti hai**
- Isliye counts correct rehte hain (no incremental error)
- JS / React dono me **recalculation preferred** over manual increment

## 3. Common Mistake (Label Gayab Bug)
- `querySelector("p")` sirf **pehla `<p>`** select karta hai
- Parent element (`<p>`) par `innerText` lagane se
  → label + child span sab replace ho jata hai

## 4. Best Practice (Industry Standard)
- Static text (label) → parent element
- Dynamic value → `<span>`

Example:
<p>Characters: <span id="char">0</span></p>

JS:
char.innerText = value.length;

## 5. span Tag
- Inline element (line break nahi leta)
- Small text / number ko alag control karne ke liye
- UI update ke liye ideal

## 6. Characters Without Space Logic
- Local `count = 0` rakho
- Loop poori string par
- `" "` skip karo, baaki sab count

## 7. Word Count Logic
- `split(" ")` → array
- Empty strings remove using `filter`
- Remaining length = word count

## 8. Interview One-Liners
- “`innerText` replaces the entire content of an element.”
- “Dynamic UI values should be updated in child nodes like span.”
- “Re-counting avoids state inconsistency bugs.”

