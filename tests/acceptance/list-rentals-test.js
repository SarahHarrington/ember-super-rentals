import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function(assert){
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect to rentals automatically')
  });

  test('should link to information about the company', async function(assert){
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about page')
  });

  test('should ink to the contact information', async function(assert){
    await visit('/');
    await click(".menu-contact");
    assert.euqal(currentURL(), '/contact', 'should navigate to contact page')
  });

  test('should list available rentals', async function(assert) {});

  test('should filter the list of rentals by city', async function(assert) {});

  test('should show details for a selected rental', async function(assert) {});

});
