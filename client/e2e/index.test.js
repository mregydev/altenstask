import { Selector } from 'testcafe';

fixture`Check if status filters and owners filter`
    .page`../build/index.html`.beforeEach(async t => {
        await t.resizeWindow(1480, 700);
    });

test('should show status filter when status filter button clicked', async t => {
    await t
        .click('#showStatusFilterBtn')
        .expect(Selector('#statusFilterDiv').getStyleProperty('display')).eql('flex');
});



test('should show online and offline cars', async t => {
    await t
        .click('#showStatusFilterBtn')
        .expect(Selector('#offlineCheckBox').checked).eql(true)
        .expect(Selector('#onlineCheckBox').checked).eql(true);
});



test('should apply status filter correctly', async t => {
    await t
        .click('#showStatusFilterBtn')
        .click('#offlineCheckBox')
        .expect(Selector('#bodyContainer').child().count).eql(1);
});


test('should show owners filter when owners filter button clicked', async t => {
    await t
        .click('#showOwnersFilterBtn')
        .expect(Selector('#ownersFilterDiv').getStyleProperty('display')).eql('flex');
});