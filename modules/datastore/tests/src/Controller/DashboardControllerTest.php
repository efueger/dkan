<?php

namespace Drupal\Tests\datastore\Controller;

use Drupal\Core\DependencyInjection\Container;
use Drupal\common\DatasetInfo;
use Drupal\Core\StringTranslation\TranslationManager;
use Drupal\datastore\Controller\DashboardController;
use Drupal\harvest\Service as Harvest;
use MockChain\Chain;
use MockChain\Options;
use PHPUnit\Framework\TestCase;

class DashboardControllerTest extends TestCase {

  public function testNoDatasets() {
    $time = time();

    $container = $this->getCommonMockChain()
      ->add(Harvest::class, 'getAllHarvestRunInfo', [$time])
      ->add(DatasetInfo::class, 'gather', ['notice' => 'Not found']);

    \Drupal::setContainer($container->getMock());

    $controller = DashboardController::create($container->getMock());

    $response = $controller->datasetsImportStatus('test');

    $json = json_encode($response);
    $strings = array_merge(DashboardController::DATASET_HEADERS,);

    $this->assertEmpty($response['#rows']);
    foreach ($strings as $string) {
      $this->assertStringContainsString($string, $json);
    }
  }

  public function testDataset() {
    $time = time();

    $info = [
      'uuid' => 'dataset-1',
      'title' => 'Title',
      'revision_id' => '2',
      'moderation_state' => 'published',
      'modified_date_metadata' => '2020-01-15',
      'modified_date_dkan' => '2021-02-11',
    ];

    $distribution = [
      'distribution_uuid' => 'dist-1',
      'fetcher_status' => 'done',
      'fetcher_percent_done' => 100,
      'importer_status' => 'done',
      'importer_percent_done' => 100,
    ];

    $infoWithDist = array_merge($info, ['distributions' => [$distribution]]);

    $datasetInfo = [
      'latest_revision' => $infoWithDist,
    ];

    $container = $this->getCommonMockChain()
      ->add(Harvest::class, 'getAllHarvestRunInfo', [$time])
      ->add(DatasetInfo::class, 'gather', $datasetInfo);

    \Drupal::setContainer($container->getMock());

    $controller = DashboardController::create($container->getMock());

    $response = $controller->datasetsImportStatus('test');

    $json = json_encode($response);
    $strings = array_merge(
      DashboardController::DATASET_HEADERS,
      DashboardController::DISTRIBUTION_HEADERS,
      $info,
      $distribution
    );

    foreach ($strings as $string) {
      $this->assertStringContainsString($string, $json);
    }

    $title = (string) $controller->datasetsImportStatusTitle('test');
    $this->assertEquals('Datastore Import Status. Harvest <em class="placeholder">test</em>', $title);
  }

  private function getCommonMockChain() : Chain {
    $options = (new Options())
      ->add('dkan.harvest.service', Harvest::class)
      ->add('dkan.common.dataset_info', DatasetInfo::class)
      ->add('string_translation', TranslationManager::class)
      ->index(0);

    $runInfo = (object) [
      'status' => (object) [
        'extract' => 'SUCCESS',
        'load' => [
          'dataset-1' => "NEW"
        ]
      ]
    ];

    return (new Chain($this))
      ->add(Container::class, 'get', $options)
      ->add(Harvest::class, 'getAllHarvestIds', ['test'])
      ->add(Harvest::class,'getHarvestRunInfo', json_encode($runInfo));
  }

}