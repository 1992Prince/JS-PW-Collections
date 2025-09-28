import { test, expect } from '@playwright/test';

test('Input values', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/10-input-values.html');

    await page.getByPlaceholder('Peter').fill('John');

    /**
     * <input id="birth-date" name="birth-date" type="date">
     * <input type="date"> hamesha ISO-8601 format maangta hai: YYYY-MM-DD.
     * If u send data like DD-MM-YYYY (20-08-2025) bhej rahe ho, jo malformed maana jaata hai.
     * like await page.locator('#birth-date').fill('20-08-2025'); will give malformed value error
     * correct way is -
     * await page.locator('#birth-date').fill('2025-08-20'); // YYYY-MM-DD
     */
    //
    await page.locator('#birth-date').fill('2025-08-20'); // YYYY-MM-DD

    // <input id="appointment-time" name="appointment-time" type="time">
    await page.locator('#appointment-time').fill('10:30');


    // <input id="local-time" name="local-time" type="datetime-local">
    // Fill a datetime-local input
    /**
     * Yahaan:
        2025-08-20 → date (YYYY-MM-DD)
        T → literal separator character (zaruri hai)
        13:15 → time (HH:mm)
     */
    await page.locator('#local-time').fill('2025-08-20T13:15');



});



test('Select Dropdown values', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/11-dropdown.html');

    await page.pause();

    // Select by value
    await page.locator('#color').selectOption('blue');
    await expect(page.locator('#color')).toHaveValue('blue');

    // Select by label (visible text)
    await page.locator('#color').selectOption({ label: 'Green' });
    await expect(page.locator('#color')).toHaveValue('green');

    // Select by index
    await page.locator('#color').selectOption({ index: 3 });
    await expect(page.locator('#color')).toHaveValue('yellow');

    // Multiple select (value array)
    await page.locator('#fruits').selectOption(['apple', 'orange']);
    await expect(page.locator('#fruits')).toHaveValues(['apple', 'orange']);

    // Multiple select (by label)
    await page.locator('#fruits').selectOption([{ label: 'Banana' }, { label: 'Grape' }]);
    await expect(page.locator('#fruits')).toHaveValues(['banana', 'grape']);

});

test('click actions', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/12-click-practice.html');

    await page.pause();

    await page.getByRole('button', { name: 'Generic Click' }).click();
    await page.getByText('Double Click Me').dblclick();
    await page.getByText('Right Click Here').click({ button: 'right' });
    await page.getByText('Shift + Click Here').click({ modifiers: ['Shift'] });
    await page.getByText('Ctrl/Meta + Click Me').click({ modifiers: ['ControlOrMeta'] });
    await page.getByText('Hover Over Me').hover();
    await page.getByText('Click Top-Left Corner').click({ position: { x: 0, y: 0 } });
    await page.getByRole('button', { name: 'Force Click Button' }).click({ force: true });
    await page.getByRole('button', { name: 'Programmatic Click' }).dispatchEvent('click');


});


test('keyboard practice', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/13-keyboard-practice.html');

    await page.pause();

    // Type characters
    // Press keys one by one
    await page.getByPlaceholder('Enter text...').pressSequentially('Hello World!');

    await page.getByPlaceholder('Enter text...').clear();

    // Press keys one by one with delay
    await page.getByPlaceholder('Enter text...').pressSequentially('Hello World!', { delay: 100 });

});

test('file uploads', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/15-file-upload.html');

    await page.pause();

    // Single file
    await page.locator('#singleFile').setInputFiles('tests/resources/file1.pdf');

    // Multiple files
    await page.locator('#multiFile').setInputFiles(['tests/resources/file1.pdf',
        'tests/resources/file2.pdf']);

    // Directory
    await page.locator('#dirFile').setInputFiles('tests/resources');

    // Clear
    await page.locator('#multiFile').setInputFiles([]);

    // Buffer upload
    await page.locator('#dynamicBtn').setInputFiles({
        name: 'virtual.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('hello from memory')
    });

    // Dynamic input (filechooser)
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.getByText('Upload (Dynamic File Input)').click(),
    ]);
    await fileChooser.setFiles('tests/resources/myfile.pdf');
});

test('Drag and Drop', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/16-drag-drop.html');

    await page.pause();

    await page.locator('#dragMe').dragTo(page.locator('#dropHere'));

    await page.reload();

    await page.waitForTimeout(4000);

    // manually drag and drop
    await page.locator('#dragMe').hover();
    await page.mouse.down();
    await page.locator('#dropHere').hover();
    await page.mouse.up();

});


test('Scroll example', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/17-scroll-practice.html');

    await page.pause();

    //await page.waitForTimeout(2000);
    // 1️⃣ Scroll into view if needed
    //await page.getByText('Footer text').scrollIntoViewIfNeeded();

    //await page.reload();
    //await page.waitForTimeout(2000);

    // 2️⃣ Scroll with mouse wheel
    await page.getByTestId('scrolling-container').hover();
    //await page.mouse.wheel(0, 200);  // scroll down

    //await page.waitForTimeout(2000);

    //await page.mouse.wheel(0, -200);  // scroll up

    // 3️⃣ Programmatic scroll
    // 👉 Javascript se scrollTop change karega.
    await page.getByTestId('scrolling-container')
        .evaluate(e => e.scrollTop += 900);

});

test('Scroll example2', async ({ page }) => {

    await page.goto('http://127.0.0.1:5500/tests/18-scrolling-example.html');

    await page.pause();


    // ✅ Playwright Code: Scroll until child visible
    // matalab, in scrolling window , scrolling will happen until element with test id child-element is visible
    await page.getByTestId('child-element')
        .evaluate(e => e.scrollIntoView({ behavior: "smooth", block: "center" }));

});

test('Scroll example3', async ({ page }) => {

    // scenario when multiple scrolling are there on the page and we want to scroll specific one

    await page.goto('http://127.0.0.1:5500/tests/19-complex-scroll.html');

    await page.pause();


    // 👉 Scroll Sidebar to Item 6 // locating scroll window and scrolling till end
    await page.getByTestId('sidebar')
        .evaluate(e => e.scrollTop = e.scrollHeight);

    // 👉 Scroll Chat Window till “Chat Message 6”
    // here instead of locating scroll window, we are directly locating the element to be visible
    await page.getByText('Chat Message 6 🎯')
        .evaluate(e => e.scrollIntoView({ block: "center" }));



});